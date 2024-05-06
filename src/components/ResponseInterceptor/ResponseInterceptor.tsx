import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { requestRefreshToken } from "../../api/lib/token";
import api from "../../api/axiosClient";

export const ResponseInterceptor = () => {
  const navigate = useNavigate();

  const interceptorId = useRef<any>(null);

  useEffect(() => {
    async function FetchRequestRefeshToken() {
      const rft = Cookies.get("rft");
      const rs = await requestRefreshToken({ token: rft });

      if (rs?.data) {
        const { accesstoken } = rs.data;

        Cookies.set("at", accesstoken, {
          secure: true,
        });
        window.location.reload();
      } else {
        Cookies.set("at", null);
      }
    }
    interceptorId.current = api.interceptors.response.use(
      undefined,
      (error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              navigate("/auth");
              break;
            case 403:
              FetchRequestRefeshToken();
              break;
            default:
              return Promise.reject(error);
          }
        }
      }
    );
  }, [navigate]);

  return null;
};
