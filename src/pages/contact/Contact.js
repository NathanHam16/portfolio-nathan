import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Transition } from 'components/Transition';
import { useRef, useState } from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  const [complete, setComplete] = useState(false);

  return (
    <Section className={styles.contact}>
      <Meta
        title="Contact"
        description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
      />
      <Transition unmount in={!complete} timeout={1600}>
        {(visible, status) => (
          
          <form className={styles.form} >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
            >
              <DecoderText text="Contact me through my email" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
            />
            <div>
              <p>Email: nathan123wang@gmail.com</p>
            </div>
          </form>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

