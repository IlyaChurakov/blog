import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Code.module.scss';
import { memo, MouseEvent, useEffect, useState } from 'react';
import { Button, ButtonColors, ButtonVariants } from '../button/Button';
import { Copy } from 'lucide-react';
import { Text, TextColors } from '../text/Text';

interface CodeProps {
  className?: string;
  code: string;
}

export const Code = memo(({ className, code: outcomingCode }: CodeProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 1000);
  }, [copied]);

  function copy(_: MouseEvent) {
    navigator.clipboard.writeText(outcomingCode);
    setCopied(true);
  }

  return (
    <div className={classNames(styles.codeWrapper, {}, [className])}>
      <pre className={styles.pre}>
        {copied ? (
          <Text size="s" title="Скопировано" className={styles.copied} />
        ) : (
          <Button
            onClick={copy}
            color={ButtonColors.ACCENT}
            className={styles.copyBtn}
          >
            <Copy />
          </Button>
        )}

        <code className={styles.code}>{outcomingCode}</code>
      </pre>
    </div>
  );
});
