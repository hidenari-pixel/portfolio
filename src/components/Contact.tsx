import { Card, TextInput, Stack, Title, Textarea, Button } from '@mantine/core';
import { Layout } from './Layout';
import { useResponsive } from '../hooks/useResponsive';
import { useForm } from '@mantine/form';

export const ContactForm = () => {
  const isMobile = useResponsive();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      content: '',
    },
    validate: {
      name: (value) => (value.trim() !== '' ? null : '氏名を入力してください'),
      email: (value) =>
        value.match(
          /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
        )
          ? null
          : '不適切なメールアドレスです',
      content: (value) =>
        value.trim().length >= 10
          ? null
          : '内容は最低10文字以上入力してください',
    },
  });

  const handleSend = form.onSubmit(({ name, email, content }) => {
    alert({ name, email, content });
  });

  return (
    <Layout>
      <Card withBorder bg="gray.0" shadow="md" p="lg" maw="600" mx="auto">
        <form onSubmit={handleSend}>
          <Stack px={isMobile ? 0 : 'xl'} py="lg">
            <Title order={3}>お問い合わせフォーム</Title>
            <Stack gap="sm">
              <TextInput
                label="氏名"
                placeholder="姓 名"
                {...form.getInputProps('name')}
              />
              <TextInput
                label="メールアドレス"
                placeholder="email@example.com"
                {...form.getInputProps('email')}
              />
              <Textarea
                autosize
                minRows={6}
                label="内容"
                {...form.getInputProps('content')}
              />
            </Stack>
            <Button type="submit">送信</Button>
          </Stack>
        </form>
      </Card>
    </Layout>
  );
};
