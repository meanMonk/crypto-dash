import styled from "styled-components";

export const Text = styled('p')<{color?: string, uppercase?: boolean}>`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  margin: 0 0 4px 0;
  color: ${({ theme, color = 'primary' }) => theme.colors[color]};
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'none'}
`
export const Heading = styled(Text)`
  font-weight: 600;
  line-height: 28px;
`

export const SubHeading = styled(Text)<{weight?: number | string}>`
  font-weight: ${({ weight }) => weight || 600};
  line-height: 24px;
  `
  export const Title = styled(Text)<{weight? : number}>`
  font-weight: ${({ weight }) => weight || 600};
  line-height: 20px;
`
export const SubTitle = styled(Text)`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme, color = 'primary' }) => theme.colors[color]};
`
export const Small = styled('span') <{ color?: string, uppercase?: boolean, weight?: number | string }>`
  color: ${({ theme, color = 'primary' }) => theme.colors[color]};  
  font-weight: ${({ weight = 400 }) => weight}; 
  font-size: 12px;
  line-height: 15px;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'none'}
`