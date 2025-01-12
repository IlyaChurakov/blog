import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/modal/Modal'
import { useCallback, useState } from 'react'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/button/Button'

const Navbar = () => {
    const {t} = useTranslation('main')
    const [isOpenModal, setIsOpenModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsOpenModal(isOpenModal => !isOpenModal)
    }, [])

    return (
        <div className={classNames(styles.navbar)}>
            <div className={classNames(styles.links)}>
                <Button 
                    size={ButtonSizes.M} 
                    variant={ButtonVariants.TEXT_INVERTED} 
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal isOpen={isOpenModal} onClose={onToggleModal}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <Button 
                            size={ButtonSizes.M} 
                            variant={ButtonVariants.OUTLINE} 
                            onClick={onToggleModal}
                        >
                            {t('Войти')}
                        </Button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Navbar