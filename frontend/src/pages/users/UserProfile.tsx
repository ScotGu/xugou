import { useState, useEffect } from 'react';
import { Button, Card, Flex, Heading, Text, TextField, Box } from '@radix-ui/themes';
import { useAuth } from '../../contexts/AuthContext';
import { updateUser, changePassword, UpdateUserRequest, ChangePasswordRequest } from '../../api/users';
import { useTranslation } from 'react-i18next';

const UserProfile = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [profileError, setProfileError] = useState('');
  const [profileSuccess, setProfileSuccess] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  
  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email || '');
    }
  }, [user]);
  
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileError('');
    setProfileSuccess('');
    setIsProfileLoading(true);
    
    if (!user) {
      setProfileError(t('profile.error.notLoggedIn'));
      setIsProfileLoading(false);
      return;
    }
    
    const data: UpdateUserRequest = {
      username,
      email: email || undefined
    };
    
    try {
      const response = await updateUser(user.id, data);
      if (response.success) {
        setProfileSuccess(t('profile.success.updated'));
      } else {
        setProfileError(response.message || t('profile.error.update'));
      }
    } catch (err: any) {
      setProfileError(err.message || t('profile.error.update'));
    } finally {
      setIsProfileLoading(false);
    }
  };
  
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');
    
    if (!user) {
      setPasswordError(t('profile.error.notLoggedIn'));
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setPasswordError(t('profile.error.passwordMismatch'));
      return;
    }
    
    setIsPasswordLoading(true);
    
    const data: ChangePasswordRequest = {
      currentPassword,
      newPassword
    };
    
    try {
      const response = await changePassword(user.id, data);
      if (response.success) {
        setPasswordSuccess(t('profile.success.passwordChanged'));
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setPasswordError(response.message || t('profile.error.passwordChange'));
      }
    } catch (err: any) {
      setPasswordError(err.message || t('profile.error.passwordChange'));
    } finally {
      setIsPasswordLoading(false);
    }
  };
  
  if (!user) {
    return <Text>{t('common.loading')}</Text>;
  }
  
  return (
    <Box>
      <div className="page-container detail-page">
        <Flex justify="between" align="center" className="detail-header">
          <Heading size="6">{t('profile.title')}</Heading>
        </Flex>
        
        <div className="detail-content">
          <Flex direction="column" gap="6">
            <Card>
              <Heading size="4" mb="4">{t('profile.basicInfo')}</Heading>
              
              {profileError && <Text color="red" mb="3">{profileError}</Text>}
              {profileSuccess && <Text color="green" mb="3">{profileSuccess}</Text>}
              
              <form onSubmit={handleProfileUpdate}>
                <Flex direction="column" gap="3">
                  <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">{t('user.username')}</Text>
                    <TextField.Input
                      value={username}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                      required
                    />
                  </Flex>
                  
                  <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">{t('user.email')}</Text>
                    <TextField.Input
                      type="email"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                  </Flex>
                  
                  <Button type="submit" disabled={isProfileLoading}>
                    {isProfileLoading ? t('common.savingChanges') : t('profile.update')}
                  </Button>
                </Flex>
              </form>
            </Card>
            
            <Card>
              <Heading size="4" mb="4">{t('profile.changePassword')}</Heading>
              
              {passwordError && <Text color="red" mb="3">{passwordError}</Text>}
              {passwordSuccess && <Text color="green" mb="3">{passwordSuccess}</Text>}
              
              <form onSubmit={handlePasswordChange}>
                <Flex direction="column" gap="3">
                  <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">{t('profile.currentPassword')}</Text>
                    <TextField.Input
                      type="password"
                      value={currentPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </Flex>
                  
                  <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">{t('profile.newPassword')}</Text>
                    <TextField.Input
                      type="password"
                      value={newPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                      required
                    />
                  </Flex>
                  
                  <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">{t('profile.confirmNewPassword')}</Text>
                    <TextField.Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </Flex>
                  
                  <Button type="submit" disabled={isPasswordLoading}>
                    {isPasswordLoading ? t('common.savingChanges') : t('profile.changePasswordButton')}
                  </Button>
                </Flex>
              </form>
            </Card>
          </Flex>
        </div>
      </div>
    </Box>
  );
};

export default UserProfile; 