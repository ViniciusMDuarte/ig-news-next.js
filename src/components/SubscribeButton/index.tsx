import styles from './styles.module.scss'

interface subscribeButtonProps {
    priceId: number;
}

export function SubscribeButton({ priceId }: subscribeButtonProps) {
    return (
        <button 
        type="button" 
        className={styles.subscribeButton}
        > 
        Subscribe now

        </button>

    );
}