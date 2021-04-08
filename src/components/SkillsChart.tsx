import { useTheme } from '@material-ui/core';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { IProps, Skill } from 'models/user.models';

export interface WebSkillsProps extends IProps {
  data: Skill[];
  stroke?: string;
  fill?: string;
}

export function SkillsChart({ data, stroke, fill }: WebSkillsProps) {
  const { palette } = useTheme();
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='name' />
        <PolarRadiusAxis />
        <Radar
          dataKey='level'
          stroke={stroke ?? palette.secondary.main}
          fill={fill ?? palette.primary.dark}
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
