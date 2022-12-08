import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();
    return (
        <div>
            home
            <div>{t('home.new_todo_item')}</div>
        </div>
    );
}
