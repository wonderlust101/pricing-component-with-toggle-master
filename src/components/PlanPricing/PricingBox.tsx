import './PricingBox.scss'
import Button from "../Button/Button.tsx";

type PricingBoxProps = {
    type: string;
    storage: number;
    maxUsers: number;
    sendSize: number;
    costMonthly: number;
}

export default function PricingBox({type, storage, maxUsers, sendSize, costMonthly}: PricingBoxProps) {
    return (
        <section className='pricing-box'>
            <header className='pricing-box__header'>
                <h2 className='pricing-box__type'>{type}</h2>
                <p className={'pricing-box__cost'} style={type === 'professional' ? {color:'#FFFFFF'} : {color:'#4A4D60'}}>
                    <span className='pricing-box__dollar-sign'>$</span>{costMonthly}
                </p>
            </header>

            <div className="pricing-box__details">
                <hr className="pricing-box__divider" />
                <p>{storage < 1 ? storage * 1000 + "GB" : 'TB'}</p>
                <hr className="pricing-box__divider" />
                <p>{maxUsers} Users Allowed</p>
                <hr className="pricing-box__divider" />
                <p>Send up to {sendSize} GB</p>
                <hr className="pricing-box__divider" />
            </div>

            <Button href='#' color={type === 'professional' ? 'white': 'purple'}>
                Learn More
            </Button>
        </section>
    )
}