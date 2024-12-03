import './Chip02.scss';
import classNames from 'classnames';

export interface ChipProps {
    label: string;
    color?: 'primary' | 'secondary' | 'default';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean; 
    selected?: boolean;
    onClick?: () => void; 

}

export const Chip02 = ({
    label,
    color = 'default',
    size = 'medium',
    disabled = false,
    selected = false,
    onClick
  }: ChipProps) => {

    const chipClasses = classNames('chip02', {
      [`chip02--${color}`]: color,
      [`chip02--${size}`]: size,
      'chip02--disabled': disabled,
      'chip02--selected': selected,
    });
  
    return (
      <div 
        className={chipClasses}
        onClick={onClick}
        role= "button"
      >
        <span className="label">{label}</span>
      </div>
    );
  };
