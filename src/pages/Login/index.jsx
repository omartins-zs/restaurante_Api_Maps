/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import { DEMO_USERS } from '../../mocks/restaurantsMock';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f1147 0%, #6200ee 55%, #3700b3 100%);
  padding: 20px;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.fontFamily};
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 440px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 32px 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  text-align: center;
`;

const LogoImg = styled.img`
  height: 54px;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`;

const Input = styled.input`
  padding: 11px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #6200ee;
    box-shadow: 0 0 0 3px rgba(98, 0, 238, 0.15);
  }
`;

const ErrorAlert = styled.div`
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #b91c1c;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13px;
`;

const SubmitButton = styled.button`
  margin-top: 6px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: #6200ee;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4b00b5;
  }
`;

const DemoSection = styled.div`
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid #e5e7eb;
`;

const DemoTitle = styled.p`
  margin: 0 0 10px 0;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
  text-align: center;
`;

const DemoButtonsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DemoButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 9px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
  cursor: pointer;
  font-size: 13px;
  color: #1f2937;
  transition: all 0.15s ease;

  &:hover {
    background-color: #f3e8ff;
    border-color: #c084fc;
  }
`;

const RoleBadge = styled.span`
  background-color: ${({ color }) => color || '#6200ee'};
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 999px;
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('admin@restaurantes.com');
  const [password, setPassword] = useState('Password@123');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const matchedUser = DEMO_USERS.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );

    if (!matchedUser) {
      setError('Credenciais inválidas. Utilize um dos perfis de demonstração abaixo.');
      return;
    }

    onLogin({
      id: matchedUser.id,
      name: matchedUser.name,
      email: matchedUser.email,
      role: matchedUser.role,
      badgeColor: matchedUser.badgeColor,
    });
  };

  const handleQuickFill = (user) => {
    setEmail(user.email);
    setPassword(user.password);
    setError('');
  };

  return (
    <PageWrapper>
      <LoginCard>
        <LogoWrapper>
          <LogoImg src={logo} alt="Restaurant Finder Logo" />
          <Subtitle>Localizador Inteligente de Restaurantes & Google Places</Subtitle>
        </LogoWrapper>

        <Form onSubmit={handleSubmit}>
          {error && <ErrorAlert>{error}</ErrorAlert>}

          <FieldGroup>
            <Label htmlFor="login-email">E-mail de Acesso</Label>
            <Input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@restaurantes.com"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="login-password">Senha</Label>
            <Input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </FieldGroup>

          <SubmitButton type="submit">Entrar na Plataforma</SubmitButton>
        </Form>

        <DemoSection>
          <DemoTitle>Acesso Rápido (1 Clique - Ambiente de Testes)</DemoTitle>
          <DemoButtonsGrid>
            {DEMO_USERS.map((user) => (
              <DemoButton key={user.id} type="button" onClick={() => handleQuickFill(user)}>
                <span>
                  <strong>{user.name}</strong> ({user.email})
                </span>
                <RoleBadge color={user.badgeColor}>{user.role}</RoleBadge>
              </DemoButton>
            ))}
          </DemoButtonsGrid>
        </DemoSection>
      </LoginCard>
    </PageWrapper>
  );
};

export default Login;
