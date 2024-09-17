import PricingBox from "./PricingBox.tsx";
import './PlanPricing.scss'
import Switch from "../Switch/Switch.tsx";
import {useState} from "react";

type plan = {
    type: string;
    storageTB: number;
    maxUsers: number;
    sendSize: number;
    costMonthly: number;
}

const plans: plan[] = [
    {
        "type": "basic",
        "storageTB": 0.5,
        "maxUsers": 2,
        "sendSize": 3,
        "costMonthly": 19.99
    },
    {
        "type": "professional",
        "storageTB": 1,
        "maxUsers": 5,
        "sendSize": 10,
        "costMonthly": 24.99
    },
    {
        "type": "master",
        "storageTB": 2,
        "maxUsers": 10,
        "sendSize": 20,
        "costMonthly": 39.99
    },
]

export default function PlanPricing() {
    const [yearlyPlan, setYearlyPlan] = useState(false);

    function handlePlanToggle() {
        setYearlyPlan(!yearlyPlan);
    }

    return (
        <section className="plan-pricing">
            <header className="plan-pricing__header">
                <h1>Our Pricing</h1>

                <div className="plan-pricing__switch">
                    <p className="plan-pricing__switch-label">Annually</p>

                    <Switch onToggle={handlePlanToggle}/>

                    <p className="plan-pricing__switch-label">Monthly</p>
                </div>
            </header>


            <div className="plan-pricing__pricing-grid">
                {plans.map((plan) => (
                    <PricingBox key={plan.type}
                                type={plan.type}
                                storage={plan.storageTB}
                                maxUsers={plan.maxUsers}
                                sendSize={plan.sendSize}
                                costMonthly={yearlyPlan ? parseFloat((plan.costMonthly * 10 + 0.09).toFixed(2)) : parseFloat(plan.costMonthly.toFixed(2))}
                    />
                ))}
            </div>
        </section>
    )
}