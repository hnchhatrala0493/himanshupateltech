import { Helmet } from 'react-helmet-async';
import { Container, SectionHeading } from '../components/Shared';
export default function LegalPage({ type }: { type: 'privacy' | 'terms' }) {
  const privacy = type === 'privacy';
  return <div className="legal-page"><Helmet><title>{privacy ? 'Privacy Policy' : 'Terms'} | Himanshu Chhatrala</title></Helmet><Container><SectionHeading eyebrow="Legal" title={privacy ? 'Privacy Policy' : 'Terms and Conditions'} align="left" /><article className="card"><p>{privacy ? 'This portfolio only collects information you voluntarily submit through the contact form. It is used solely to respond to your enquiry and is not sold or shared for advertising.' : 'This website is provided for informational and portfolio purposes. Project names, descriptions, and visuals may represent demonstrations or works in progress.'}</p><h3>Contact</h3><p>For questions about this page, email himanshupatel0493@gmail.com.</p></article></Container></div>;
}
