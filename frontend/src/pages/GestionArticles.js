import {
    Stack, 
    Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import {HOSTNAME} from "../Variables";
import ArticlesComponent from "../components/ArticlesComponent";

const GestionArticles = () => {

    const navigate = useNavigate();

    const [content, setContent] = useState((
        <Stack style={{top: "0", bottom: "0", position: "fixed", height: "100%", width: "100%"}}>
            <Spinner style={{alignSelf: "center", position: "absolute", top: "50%", transform: "translateY(-50%)"}}/>
        </Stack>
    ));

    const verifConnexion = async () =>
    {
      const valeurDuCookie = Cookies.get('compte');
      let formData = new FormData();
      formData.append('compte', ''+valeurDuCookie);
      const response = await axios.post(HOSTNAME+'/EstAdmin',
      formData);
      if (response.data !== true)
      {
        navigate("/");
      } else {
          setContent((
              <ArticlesComponent/>
          ));
      }
    }

    useEffect(() => {
        verifConnexion();
    }, []);

    return (
        <Stack style={{gap: "0"}}>
            {content}
        </Stack>
    );
}

export default GestionArticles;