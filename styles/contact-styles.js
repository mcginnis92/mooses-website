import styled from 'styled-components';
import {Input, Textarea, spacing} from 'design-system-styled-components';

export const StyledContactFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledTextArea = styled(Textarea)`
  margin-bottom: ${spacing.medium};
`;

export const StyledInput = styled(Input)`
  margin-bottom: ${spacing.medium};
`;

export const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${spacing.extraLarge};
`;