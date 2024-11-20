const validateEnvVariables = (variables: Record<string, string | undefined>): Record<string, string> => {
  const missingVariables = Object.entries(variables)
    .filter(([ _, value ]) => !value)
    .map(([ key ]) => key);

  if (missingVariables.length > 0) {
    throw new Error(`As seguintes variáveis de ambiente estão ausentes: ${missingVariables.join(", ")}`);
  }

  return variables as Record<string, string>;
};

export default validateEnvVariables;