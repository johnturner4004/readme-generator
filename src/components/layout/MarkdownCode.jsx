import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function MarkdownCode() {
  // const file = useSelector(state => state.readme.selected);
  // const [githubUser, setGithubUser] = useState(file.github_user);
  // const [githubRepo, setGithubRepo] = useState(file.github_repository_name);
  const unsavedFiles = localStorage.unsavedFiles === 'true';
  const [complete, setComplete] = useState(false);
  const file = useSelector(store => store.readme.selected);

  // useEffect(() => {f

  // }, [file]);
  // const setHooks = () => {
  //   setGithubUser(unsavedFiles && localStorage.github_user ? localStorage.github_user : file.github_user);
  //   setGithubRepo(unsavedFiles && localStorage.github_repository_name ? localStorage.github_repository_name : file.github_repository_name);
  //   setComplete(true);
  // }

  // useEffect(() => {
  //   setHooks();
  // }, [])

  return file ? `![GitHub](https://img.shields.io/github/license/${file.github_user}/${file.github_repository_name}?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/${file.github_user}/${file.github_repository_name}.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/${file.github_user}/${file.github_repository_name}.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/${file.github_user}/${file.github_repository_name}.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/${file.github_user}/${file.github_repository_name}.svg?style=for-the-badge)
` : ''
}
