import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { BooleanTogglePropTypes, BooleanToggleTypes } from './types';

const BooleanToggle = ({
  firstOption,
  secondOption,
  handleChange,
  value,
}: BooleanToggleTypes): JSX.Element => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value={firstOption}>{firstOption}</ToggleButton>
      <ToggleButton value={secondOption}>{secondOption}</ToggleButton>
    </ToggleButtonGroup>
  );
};

BooleanToggle.propTypes = BooleanTogglePropTypes;

export default BooleanToggle;
