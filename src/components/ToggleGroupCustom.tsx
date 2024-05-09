import { AlignCenter, AlignLeft, AlignRight } from "@tamagui/lucide-icons"
import { Label, ToggleGroup, XStack, type SizeTokens } from "tamagui"

export default function ToggleGroupComponent(props: {
    size: SizeTokens
    type: 'single' | 'multiple'
    orientation: 'vertical' | 'horizontal'
  }) {
    const id = `switch-${props.size.toString().slice(1)}-${props.type}`
    return (
      <XStack
        flexDirection={props.orientation === 'horizontal' ? 'row' : 'column'}
        alignItems="center"
        justifyContent="center"
        gap="$4"
      >
  
        <ToggleGroup
          orientation={props.orientation}
          id={id}
          type={props.type as any} // since this demo switches between loosen types
          size={props.size}
          disableDeactivation={props.type === 'single' ? true : undefined}
        >
          <ToggleGroup.Item value="left" aria-label="Left aligned">
            <AlignLeft />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="center" aria-label="Center aligned">
            <AlignCenter />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="right" aria-label="Right aligned">
            <AlignRight />
          </ToggleGroup.Item>
        </ToggleGroup>
      </XStack>
    )
  }