import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/ui/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { VStack } from '@/shared/ui/stack';

const ProfilePage = memo(() => {
  const { id } = useParams();
  if (!id) return null;

  return (
    <Page>
      <VStack gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
