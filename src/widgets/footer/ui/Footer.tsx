import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import { ViberIcon } from "@/shared/assets/icons/ViberIcon";
import { WhatsappIcon } from "@/shared/assets/icons/WhatsappIcon";
import { InstagramIcon } from "@/shared/assets/icons/InstagramIcon";
import { TelegrammIcon } from "@/shared/assets/icons/TelegrammIcon";
import { Container } from "@/shared/components/container/Container";
import { PlaymarketIcon } from "@/shared/assets/icons/PlaymarketIcon";

import style from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footer__container}>
          <p className={style.footer__polit}>
            Политика обработки персональных данных
          </p>

          <div className={style.footer__inf}>
            <div className={style.footer__text}>Контакты</div>
            <div className={style.footer__contact}>
              <a href="#">
                <EmailOutlinedIcon /> easytax@gmail.com
              </a>
              <a href="#">
                <LocalPhoneOutlinedIcon /> +375 29 163-63-02
              </a>
            </div>
            <div className={style.footer__media}>
              <div className={style.row}>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <TelegrammIcon />
                </a>
                <a href="#">
                  <ViberIcon />
                </a>
                <a href="#">
                  <WhatsappIcon />
                </a>
              </div>
              <div className={style.row}>
                <a href="#">
                  <PlaymarketIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
