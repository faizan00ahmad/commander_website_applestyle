import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Awards from "@/components/Awards";
import { distributors } from "@/content/data";

export const metadata = { title: "Distributor List | Commander Group", description: "Authorized Commander Petrogas LPG distributors in Multan with contact numbers." };

export default function Distributors() {
  return (
    <>
      <PageHero eyebrow="Distributor" title={<>Distributor <span className="grad">List</span></>} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <div className="table-wrap">
              <table>
                <thead><tr><th>S.N</th><th>Distributor Name</th><th>Address</th><th>Contact Number</th></tr></thead>
                <tbody>
                  {distributors.map((d, i) => (
                    <tr key={d[0]}><td>{i + 1}</td><td>{d[0]}</td><td>{d[1]}</td><td><a href={`tel:${d[2].replace(/\s/g, "")}`}>{d[2]}</a></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
      <Awards />
    </>
  );
}
