import {Button} from '@upleat-ui/ui';
import { Stack } from '@mantine/core';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello U PLEAT</h1>
      <Button>Click me</Button>
      <p>features/vStack branch 생성 완료</p>
      <Stack
        className={styles.stack}
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="center"
        gap="md"
      >
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Stack>
    </div>
  );
}
