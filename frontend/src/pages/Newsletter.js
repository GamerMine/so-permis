import React, { useState, useEffect } from 'react';
import {Stack, Spinner} from '@chakra-ui/react';
import axios from 'axios';
import {HOSTNAME} from "../Variables";
import Cookies from "js-cookie";
import NewsletterComponent from "../components/NewsletterComponent";
import {useNavigate} from "react-router-dom";

const Newsletter = () => {
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
          <NewsletterComponent/>
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
};

export default Newsletter;
