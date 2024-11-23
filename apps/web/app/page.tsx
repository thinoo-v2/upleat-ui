import {Button, HStack} from '@upleat-ui/ui';
import {Stack} from '@mantine/core';

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

      <HStack>
        <Button variant="solid" color="primary" sizes="md">solid (primary)</Button>
        <Button variant="outline" color="primary" sizes="md">outline (primary)</Button>
        <Button variant="dashed" color="primary" sizes="md">dashed (primary)</Button>
      </HStack>
      <HStack gap="lg">
        <Button variant="solid" color="secondary" sizes="md">solid (secondary)</Button>
        <Button variant="outline" color="secondary" sizes="md">outline (secondary)</Button>
        <Button variant="dashed" color="secondary" sizes="md">dashed (secondary)</Button>
      </HStack>
      <HStack gap="xl">
        <Button variant="solid" color="status" sizes='md'>solid (status-error)</Button>
        <Button variant="outline" color="status" sizes="md">outline (status-error)</Button>
        <Button variant="dashed" color="status" sizes="md">dashed (status-error)</Button>
      </HStack>
      <HStack variant="bordered" gap="xs">
        <Button variant="solid" color="primary" sizes='xs'>Button (xs)</Button>
        <Button variant="solid" color="primary" sizes='sm'>Button (sm)</Button>
        <Button variant="solid" color="primary" sizes='md'>Button (md)</Button>
        <Button variant="solid" color="primary" sizes='lg'>Button (lg)</Button>
        <Button variant="solid" color="primary" sizes='xl'>Button (xl)</Button>
      </HStack>
    </div>
  );
}
