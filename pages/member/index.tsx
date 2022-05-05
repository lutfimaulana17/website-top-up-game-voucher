import jwtDecode from "jwt-decode";
import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userPlayer: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userPlayer.avatar = `${IMG}/${userPlayer.avatar}`;

  return {
    props: {
      user: userPlayer,
    },
  };
}
