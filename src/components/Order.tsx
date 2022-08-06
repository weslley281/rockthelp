import { Text, VStack } from 'native-base';

export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed';
};
type Props = {
  data: OrderProps;
};

export function Order({ data, ...rest }: Props) {
  return (
    <VStack>
      <Text></Text>
    </VStack>
  );
}
