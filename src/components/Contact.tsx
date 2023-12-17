import { Card, TextInput, Stack, Title, Textarea, Button } from '@mantine/core';
import { Layout } from './Layout';
import { useIsMobile } from '../hooks/useIsMobile';
import { useForm } from '@mantine/form';
import { useSnackbar } from '../hooks/useSnackBar';
import { useState } from 'react';
import { sleep } from '../utils/sleep';

export const ContactForm = () => {
  const [isSend, setIsSend] = useState(false);

  const isMobile = useIsMobile();

  const { success, error } = useSnackbar();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim() !== '' ? null : '氏名を入力してください'),
      email: (value) =>
        value.match(
          /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
        )
          ? null
          : '不適切なメールアドレスです',
      message: (value) =>
        value.trim().length >= 10
          ? null
          : '内容は最低10文字以上入力してください',
    },
  });

  const handleSend = form.onSubmit(async (values) => {
    try {
      setIsSend(true);
      const apiUrl = import.meta.env.PUBLIC_CFW_URL as string;
      const resp = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(values),
      });
      if (resp.ok) {
        success({
          title: '送信しました',
          description: '3秒後に自動でホームに戻ります',
        });
        await sleep(3);
        location.replace('/');
      } else {
        throw new Error('予期せぬエラーが発生しました');
      }
    } catch (e) {
      error({ title: '送信に失敗しました', description: (e as Error).message });
      setIsSend(false);
    }
  });

  return (
    <Layout>
      <Card withBorder bg="gray.0" shadow="md" p="lg" maw="600" mx="auto">
        <form onSubmit={handleSend}>
          <Stack px={isMobile ? 0 : 'xl'} py="lg">
            <Title order={3}>お問い合わせフォーム</Title>
            <Stack gap="sm">
              <TextInput
                required
                label="氏名"
                placeholder="姓 名"
                {...form.getInputProps('name')}
              />
              <TextInput
                required
                label="メールアドレス"
                placeholder="email@example.com"
                {...form.getInputProps('email')}
              />
              <Textarea
                autosize
                required
                minRows={6}
                label="内容"
                {...form.getInputProps('message')}
              />
            </Stack>
            <Button disabled={isSend} type="submit">
              送信
            </Button>
          </Stack>
        </form>
      </Card>
    </Layout>
  );
};
