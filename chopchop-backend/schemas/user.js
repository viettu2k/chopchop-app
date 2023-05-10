const userSchema = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    { name: 'userName', title: 'User Name', type: 'string' },
    { name: 'iamge', title: 'Image', type: 'string' },
  ],
};

export default userSchema;
