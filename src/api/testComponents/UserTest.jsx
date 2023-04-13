import { useUser, useUpdateUser, useStatistics, useSubscribe } from '../hooks';
import { useUserTheme } from 'redux/useUserTheme';

export const UserTest = () => {
  const [userTheme, setUserTheme] = useUserTheme();

  const user = useUser({
    onSuccess: console.log,
    onError: console.log,
  });
  const updateUser = useUpdateUser({
    onSuccess: console.log,
    onError: console.log,
  });
  const statistics = useStatistics({
    onSuccess: console.log,
    onError: console.log,
  });

  const subscribe = useSubscribe({
    onSuccess: console.log,
    onError: console.log,
  });
  const isLoading =
    user.isLoading ||
    updateUser.isLoading ||
    statistics.isLoading ||
    subscribe.isLoading;
  const error =
    user.error || updateUser.error || statistics.error || subscribe.error;

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    const name = e.target.name.value;
    const file = e.target.file.files[0];
    formData.append('name', name);
    formData.append('avatar', file);
    console.log('Form data', formData);
    updateUser.mutate(formData);
  };

  const handleSubscribe = () => {
    subscribe.mutate('user10@mail.com');
  };

  const handleChangeTheme = () => {
    console.log('User Theme', userTheme);
    const theme = userTheme === 'light' ? 'dark' : 'light';
    setUserTheme(theme);
  };

  return (
    <>
      <p>{JSON.stringify(user.data)}</p>
      <p>{JSON.stringify(statistics.data)}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" />
        </label>
        <input name="file" type="file" />
        <button>Submit</button>
      </form>
      <button onClick={handleSubscribe}>Subscribe user10@mail.com</button>
      <button onClick={handleChangeTheme}>Change theme</button>{' '}
      <p>{userTheme}</p>
      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
    </>
  );
};
