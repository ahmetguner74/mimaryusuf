'use client';

import { RulesSvg } from '../utils/data';

interface RulesIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const RulesIcon = ({ className = '', width = 100, height = 100 }: RulesIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="229.854 739.214 473.823 216.192"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: RulesSvg }}
    />
  );
};

export default RulesIcon; 