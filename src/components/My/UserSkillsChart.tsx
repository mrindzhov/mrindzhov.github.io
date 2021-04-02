import { useTheme } from '@material-ui/core';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { IProps } from '../../models';

export interface RadarData {
  subject: string;
  level: number;
}
export interface WebSkillsProps extends IProps {
  data: RadarData[];
  stroke?: string;
  fill?: string;
}

export function UserSkillsChart({ data, stroke, fill }: WebSkillsProps) {
  const { palette } = useTheme();
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='subject' />
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
