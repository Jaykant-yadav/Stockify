import OpenAccount from '../OpenAccount'
import AccountTypes from './AccountTypes'
import Benefits from './Benefits'
import FAQs from './FAQs'
import Hero from './Hero'
import InvestingOptionGroup from './InvestingOptionGroup'
import StepsOfdematAcc from './StepsOfDemetAcc'

export default function SignUp() {
  return (
    <>
      <div className='containter px-5'>
        <Hero />
        <InvestingOptionGroup/>
        <StepsOfdematAcc/>
        <Benefits/>
        <AccountTypes/>
        <FAQs/>
        <OpenAccount/>
      </div>
    </>
  )
}
