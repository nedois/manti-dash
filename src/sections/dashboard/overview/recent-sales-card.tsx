import { Avatar, Button, Card, Group, Stack, Text } from "@mantine/core"
import { CardTitle } from "@/components/ui/card-title"
import { formatCurrency } from "@/utilities/number"

const data = [
  { name: "Olivia Martin", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face", email: "olivia@email.com", price: 1999.00 },
  { name: "Jackson Lee", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", email: "jackson@email.com", price: 39.00 },
  { name: "Isabella Nguyen", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face", email: "isabella@email.com", price: 299.00 },
  { name: "William Kim", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face", email: "will@email.com", price: 99.00 },
  { name: "Sofia Davis", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face", email: "sofia@email.com", price: 39.00 },
]

export function RecentSalesCard() {
  return (
    <Card h="100%">
      <CardTitle title="Recent Sales">
        <Button variant="subtle" size="xs">View all</Button>
      </CardTitle>

      <Stack mt="md">
        {data.map(sale => (
          <Group key={sale.email} wrap="nowrap" justify="space-between">
            <Group wrap="nowrap">
              <Avatar src={sale.avatar} />
              <div>
                <Text lineClamp={1}>{sale.name}</Text>
                <Text fz="xs" c="dimmed">{sale.email}</Text>
              </div>
            </Group>

            <Text ta="right" c="success">
              {formatCurrency(sale.price, { prefix: "+" })}
            </Text>
          </Group>
        ))}
      </Stack>
    </Card>
  )
}
