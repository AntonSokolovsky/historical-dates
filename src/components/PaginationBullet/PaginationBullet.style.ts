import styled from 'styled-components';

export const BulletsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Bullet = styled.div<{ isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? 'coral' : 'gray')};
  }
`;
