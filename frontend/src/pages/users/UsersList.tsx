import { useState, useEffect } from 'react';
import { Button, Table, Text, Flex, Heading, AlertDialog, Box } from '@radix-ui/themes';
import { getAllUsers, deleteUser } from '../../api/users';
import { User } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userToDelete, setUserToDelete] = useState<number | null>(null);
  
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getAllUsers();
      if (response.success && response.users) {
        setUsers(response.users);
      } else {
        setError(response.message || t('users.error.fetch'));
      }
    } catch (err: any) {
      setError(err.message || t('users.error.fetch'));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (userToDelete === null) return;
    
    try {
      const response = await deleteUser(userToDelete);
      if (response.success) {
        setUsers(users.filter(user => user.id !== userToDelete));
        setUserToDelete(null);
      } else {
        setError(response.message || t('users.error.delete'));
      }
    } catch (err: any) {
      setError(err.message || t('users.error.delete'));
    }
  };

  return (
    <Box p="4">
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">{t('users.title')}</Heading>
        <Button onClick={() => navigate('/users/create')}>{t('users.create')}</Button>
      </Flex>

      {error && <Text color="red" mb="4">{error}</Text>}

      {loading ? (
        <Text>{t('common.loading')}</Text>
      ) : (
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>{t('user.username')}</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>{t('user.email')}</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>{t('user.role')}</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>{t('common.actions')}</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan={5}>
                  <Text align="center">{t('users.noUsers')}</Text>
                </Table.Cell>
              </Table.Row>
            ) : (
              users.map(user => (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.email || '-'}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>
                    <Flex gap="2">
                      <Button size="1" onClick={() => navigate(`/users/${user.id}`)}>
                        {t('common.edit')}
                      </Button>
                      <AlertDialog.Root>
                        <AlertDialog.Trigger>
                          <Button size="1" color="red">
                            {t('common.delete')}
                          </Button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content>
                          <AlertDialog.Title>{t('common.deleteConfirmation')}</AlertDialog.Title>
                          <AlertDialog.Description>
                            {t('users.deleteConfirm', { username: user.username })}
                          </AlertDialog.Description>
                          <Flex gap="3" mt="4" justify="end">
                            <AlertDialog.Cancel>
                              <Button variant="soft" color="gray">
                                {t('common.cancel')}
                              </Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action>
                              <Button 
                                variant="solid" 
                                color="red" 
                                onClick={() => {
                                  setUserToDelete(user.id);
                                  handleDelete();
                                }}
                              >
                                {t('common.delete')}
                              </Button>
                            </AlertDialog.Action>
                          </Flex>
                        </AlertDialog.Content>
                      </AlertDialog.Root>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Root>
      )}
    </Box>
  );
};

export default UsersList; 