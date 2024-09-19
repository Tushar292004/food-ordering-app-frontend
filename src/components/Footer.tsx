import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className="border-t-2 py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl font-bold tracking-tight hover:text-blue-600">
          EatersBay
        </span>
        <span className="font-thin tracking-tight flex gap-4 m-2">
          <a
            href="https://www.instagram.com/tusharchandak29"
            target='blank'>
            <Instagram
              className="hover:text-blue-600" />
          </a>

          <a
            href="https://www.linkedin.com/in/tushar-chandak-b2b943257/"
            target='blank'>
            <Linkedin
              className="hover:text-blue-600" />
          </a>

          <a
            href="tusharchandak2004@gmail.com"
            target='blank'>
            <Mail
              className="hover:text-blue-600" />
          </a>
        </span>

        <span className="tracking-tight flex gap-4">
          <span
            className="hover:text-blue-600">
            Privacy Policy
          </span>
          <span
            className="hover:text-blue-600">
            Terms of Service
          </span>
          <a
            href="https://github.com/Tushar292004"
            target='blank'>
            <span
              className="hover:text-blue-600">
              Designed: Tushar Chandak
            </span>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer;