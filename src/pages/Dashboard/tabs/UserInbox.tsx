import { Checkbox, Divider, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth, firebaseDatabase } from 'utils/firebase';
import { UserMessage } from 'models/messages.models';
import { Papered } from 'components/Papered';

const useStyles = makeStyles((theme) => ({
  root: { width: '100%' },
  inline: { display: 'inline' },
}));

export const UserInbox = () => {
  const classes = useStyles();
  const { messages, toggleMessageRead } = useMessages();

  return (
    <Papered title='Messages'>
      <List className={classes.root}>
        {!messages.length ? (
          <Typography component='h3'>You don't have any messages yet.</Typography>
        ) : (
          messages
            .sort(([, m1], [, m2]) => Number(m1.isRead || false) - Number(m2.isRead || false))
            .map(([_id, { message, isRead, name, emailOrPhone }], idx) => (
              <React.Fragment key={_id}>
                <ListItem alignItems='flex-start'>
                  <Checkbox edge='start' onChange={toggleMessageRead(_id)} defaultChecked={isRead || false} />
                  <ListItemText
                    primary={message}
                    secondary={
                      <React.Fragment>
                        <Typography component='span' variant='body2' className={classes.inline} color='textPrimary'>
                          {name}
                        </Typography>
                        {` — ${emailOrPhone}`}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {idx < messages.length - 1 && <Divider variant='inset' component='li' />}
              </React.Fragment>
            ))
        )}
      </List>
    </Papered>
  );
};

interface UserMessages {
  [key: string]: UserMessage;
}

function useMessages() {
  const [user] = useAuthState(firebaseAuth);
  const [messages, setMessages] = useState<UserMessages>({});

  useEffect(() => {
    if (user) {
      firebaseDatabase
        .ref('messages/' + user.uid)
        .get()
        .then((snapshot) => {
          const messagesData = snapshot.val() as UserMessages;
          if (messagesData) setMessages(messagesData);
        });
    }
  }, [user]);

  const toggleMessageRead = (messageId: string) => () => {
    const prevMessage = messages[messageId];
    const newMessages: UserMessages = { ...messages, [messageId]: { ...prevMessage, isRead: !prevMessage.isRead } };

    firebaseDatabase
      .ref('messages/' + user?.uid)
      .update(newMessages)
      .then(() => setMessages(newMessages))
      .catch(console.error);
  };
  console.log(messages);

  return { messages: messages ? Object.entries(messages) : [], toggleMessageRead };
}
