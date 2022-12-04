import { useTranslation } from 'react-i18next'

export default function Login() {
    const { t } = useTranslation()
    return (
        <div>
            <div>{t('home.new_todo_item')}</div>
            <div>{t('home.clear_done_item')}</div>
        </div>
    )
}
