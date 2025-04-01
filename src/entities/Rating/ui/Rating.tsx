import { Button } from '@/shared/ui/button';
import { HStack, VStack } from '@/shared/ui/stack';
import { StarRating } from '@/shared/ui/starRating';
import { Text, TextColors } from '@/shared/ui/text';
import { useState } from 'react';

interface RatingProps {
  feedback?: string;
  onAccept: (value: number) => void;
  isLoading?: boolean;
  value: number;
}

export const Rating = ({
  feedback,
  onAccept,
  isLoading,
  value,
}: RatingProps) => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <VStack gap="16" align="start">
      {!!feedback ? (
        <Text color={TextColors.ACCENT} text={feedback} />
      ) : (
        <VStack align="center" gap="16">
          <StarRating
            disable={isLoading}
            selected={rating ?? value}
            onSelect={setRating}
          />

          <HStack gap="16">
            <Button onClick={send}>Отправить</Button>
            <Button onClick={cancel}>Отменить</Button>
          </HStack>
        </VStack>
      )}
    </VStack>
  );

  function send() {
    if (rating === null) return;
    onAccept(rating);
    setRating(null);
  }

  function cancel() {
    setRating(null);
  }
};
