import { Box, Text, VStack, useTheme, HStack } from 'native-base';
import { ClockAfternoon, Hourglass, Circle } from 'phosphor-react-native';

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
  const { colors } = useTheme();
  const statusColor =
    data.status === 'open' ? colors.secondary[700] : colors.green[300];
  return (
    <VStack
      bg="gray.600"
      mb={4}
      alignItems="center"
      justifyContent="center"
      rounded="sm"
      overflow="hidden"
    >
      <Box h="ful" w={2} bg={statusColor} />

      <VStack flex={1} my={5} ml={5}>
        <Text color="white" fontSize="md">
          Patrimônio {data.patrimony}
        </Text>

        <HStack alignItems="center">
          <ClockAfternoon size={15} color={colors.gray[300]} />
          <Text color="gray.200" fontSize="xs" ml={1}>
            {data.when}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
