import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, IconButton, Image } from "@chakra-ui/react";
import { FaChartBar, FaUsers, FaPray, FaDonate } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Text fontSize="4xl" fontWeight="bold">
          Mosque Analytics Dashboard
        </Text>

        <HStack spacing={8} width="100%" justifyContent="space-around">
          <StatBox icon={FaUsers} label="Total Visitors" number="1,234" helpText="Since last month" />
          <StatBox icon={FaPray} label="Prayer Attendance" number="567" helpText="This week" />
          <StatBox icon={FaDonate} label="Donations" number="$12,345" helpText="This month" />
        </HStack>

        <Box width="100%" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="2xl" mb={4}>
            Monthly Attendance
          </Text>
          <Image src="https://images.unsplash.com/photo-1512970648279-ff3398568f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBhdHRlbmRhbmNlJTIwY2hhcnR8ZW58MHx8fHwxNzE2NjYyODA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Monthly Attendance Chart" />
        </Box>
      </VStack>
    </Container>
  );
};

const StatBox = ({ icon, label, number, helpText }) => (
  <Box p={4} bg="white" borderRadius="md" boxShadow="md" width="250px" textAlign="center">
    <IconButton aria-label={label} icon={React.createElement(icon)} size="lg" isRound mb={4} />
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{number}</StatNumber>
      <StatHelpText>{helpText}</StatHelpText>
    </Stat>
  </Box>
);

export default Index;
