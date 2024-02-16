import InfoCategory from 'src/components/InfoCategory'

import { useModalPay } from 'src/components/ModalPay/useModalPay'

import {
  ModalBackground,
  Container,
  Info,
  ContainerWrapper,
  ButtonWrapper,
  CloseButton,
  Breeze,
  Cloud_1,
  Cloud_2,
  Cloud_3,
} from 'src/components/ModalPay/styles'

const ModalPay = (): JSX.Element => {
  const { handleInnerClick, closeModal, category, rules } = useModalPay()

  return (
    <ModalBackground onClick={closeModal}>
      <ContainerWrapper onClick={handleInnerClick}>
        <Breeze width="220" src="assets/the_breeze.png" />
        <Cloud_1 width="120" src="assets/cloud_1.png" />
        <Cloud_2 width="150" src="assets/cloud_2.png" />
        <Cloud_3 width="130" src="assets/cloud_3.png" />

        <Container>
          <CloseButton width="30" src="assets/close.svg" onClick={closeModal} />

          <InfoCategory category={category} rules={rules} />

          <Info>
            <h1>Про оплату</h1>
            <p>
              Щоб купити прохідку, вам потрібно перейти на банку Monabank та оплатити
              суму прохідки! <br />
            </p>
            <h1>
              На місяць - 50грн. <br /> Назавжди - 150грн.
            </h1>
            <p>
              Під платіж, вкажіть Ваш discord, щоб з вами зв'язався Адміністратор!
              Очікуйте відповіді протягом 24-48годин!
            </p>
          </Info>
          <ButtonWrapper>
            <a
              target="_blank"
              href="https://send.monobank.ua/jar/UbQzFQ5u7"
              rel="noreferrer"
            >
              Купити прохідку
            </a>
          </ButtonWrapper>
        </Container>
      </ContainerWrapper>
    </ModalBackground>
  )
}

export default ModalPay
