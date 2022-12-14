//nbc cria uma configuração predefinida
import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text,
  Heading,
  FlatList,
} from 'native-base';
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';
import { SignOut, Signpost } from 'phosphor-react-native';
import { useState } from 'react';
import Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>(
    'open'
  );
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '123',
      patrimony: '848464',
      when: '18/07/2022',
      status: 'open',
    },
  ]);

  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100" mb={3}>
            Meus Chamados
          </Heading>
          <Text color="gray.200">3</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="em andamento"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type="closed"
            title="finalizados"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} />}
        />
      </VStack>
    </VStack>
  );
}
