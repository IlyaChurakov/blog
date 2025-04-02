import { EditableProfileCard } from '@/features/editableProfileCard';
import { VStack } from '@/shared/ui/stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = memo(() => {
  const { id } = useParams();
  if (!id) return null;

  return (
    <Page data-testid={'ProfilePage'}>
      <VStack gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
