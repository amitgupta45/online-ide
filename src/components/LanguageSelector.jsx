import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import { LANGUAGE_VERSIONS } from "../constants";
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue";
  
  const LanguageSelector = ({ language, onSelect }) => {
    return (
      <Box ml={2} mb={4}>
        <Text mb={2} fontSize="lg">
          Language:
        </Text>
        <Menu isLazy>
          <MenuButton as={Button}variant="outline" _hover={{
                //   color: ACTIVE_COLOR,
                  bg: "#36454F",
                }}
        height="26px" padding={10}background="grey">{language}</MenuButton>
          <MenuList background="black">
            {languages.map(([lang, version]) => (
              <MenuItem
                key={lang}
                color={lang === language ? ACTIVE_COLOR : ""}
                bg={lang === language ? "gray.900" : "transparent"}
                _hover={{
                //   color: ACTIVE_COLOR,
                  bg: "gray",
                }}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                <Text as="span" color="grey.600" fontSize="sm">
                  ({version})
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    );
  };
  export default LanguageSelector;