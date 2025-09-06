import {
  FaRss
} from "react-icons/fa";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoMedium,
  IoLogoCodepen,
  IoLogoBitbucket,
  IoLogoDribbble,
  IoLogoBehance,
  IoLogoPinterest,
  IoLogoSoundcloud,
  IoLogoTumblr,
  IoLogoReddit,
  IoChatbubbles, // Using for VK
  IoLogoWhatsapp,
  IoLogoSnapchat,
  IoLogoVimeo,
  IoLogoTiktok,
  IoBusiness, // Using for Foursquare
  IoMail,
  IoCall,
  IoLocation,
  IoLogoSkype,
  IoGlobe,
} from 'react-icons/io5';

const Social = ({ source, className }) => {
  const {
    facebook,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
  } = source;

  const socialIcons = {
    facebook: IoLogoFacebook,
    twitter: IoLogoTwitter,
    instagram: IoLogoInstagram,
    youtube: IoLogoYoutube,
    linkedin: IoLogoLinkedin,
    github: IoLogoGithub,
    gitlab: IoLogoGitlab,
    medium: IoLogoMedium,
    codepen: IoLogoCodepen,
    bitbucket: IoLogoBitbucket,
    dribbble: IoLogoDribbble,
    behance: IoLogoBehance,
    pinterest: IoLogoPinterest,
    soundcloud: IoLogoSoundcloud,
    tumblr: IoLogoTumblr,
    reddit: IoLogoReddit,
    vk: IoChatbubbles,
    whatsapp: IoLogoWhatsapp,
    snapchat: IoLogoSnapchat,
    vimeo: IoLogoVimeo,
    tiktok: IoLogoTiktok,
    foursquare: IoBusiness,
    rss: FaRss,
    email: IoMail,
    phone: IoCall,
    address: IoLocation,
    skype: IoLogoSkype,
    website: IoGlobe,
  };

  return (
    <ul className={className}>
      {Object.entries(source).map(([key, value]) => {
        const Icon = socialIcons[key];
        if (value && Icon) {
          let href;
          switch (key) {
            case 'email':
              href = `mailto:${value}`;
              break;
            case 'phone':
              href = `tel:${value}`;
              break;
            default:
              href = value;
          }
          return (
            <li className="inline-block" key={key}>
              <a
                aria-label={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Icon />
              </a>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default Social;
