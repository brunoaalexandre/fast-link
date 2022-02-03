

export const getLinkSave = async (key: string) => {
  const myLinks = await localStorage.getItem(key) as string;

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

export const saveLink = async (key: string, newLink: string) => {
  let linksStored = await getLinkSave(key);

  const hasLink = linksStored.some( (link: string) => link.id === newLink.id )
  if(hasLink) {
    alert('Esse link já existe na sua lista!')
    return;
  }

  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  alert('Link salvo com sucesso');
}
