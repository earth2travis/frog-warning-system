import { FormBuilder } from '@daohaus/form-builder';
import { useDao } from '@daohaus/moloch-v3-context';
import { useParams } from 'react-router-dom';

import { FORM } from '../legos/forms';

export const AddSafeForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { refreshAll } = useDao();
  const { daochain } = useParams();

  const onFormComplete = () => {
    refreshAll?.();
    onSuccess();
  };

  return (
    <FormBuilder
      form={FORM.ADD_SAFE}
      onSuccess={onFormComplete}
      targetNetwork={daochain}
    />
  );
};

export default AddSafeForm;
