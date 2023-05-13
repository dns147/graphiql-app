import './sign-style.scss';
import { useTranslation } from 'react-i18next';

interface ISignProps {
  handleClick: () => void;
}

export default function Sign() {
  const { t } = useTranslation();
  return (
    <div className={'header-sign'}>
      <button type="button" className="btn btn-secondary">
        {t('header.sign')}
      </button>
    </div>
  );
}
