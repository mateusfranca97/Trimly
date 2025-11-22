"use client";

import { useCallback, useState } from "react";
import { faker } from "@faker-js/faker";
import type { DragEndEvent } from "../../components/ui/shadcn-io/list";
import {
  ListGroup,
  ListHeader,
  ListItem,
  ListItems,
  ListProvider,
} from "../../components/ui/shadcn-io/list";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

type Status = {
  id: string;
  name: "Lista de Espera";
};

type User = {
  id: string;
  name: string;
  image: string;
};

type Feature = {
  id: string;
  name: string;      // aqui você pode entender como "serviço" do cliente
  startAt: Date;
  endAt: Date;
  status: Status;
  owner: User;       // "cliente"
};

const statuses: Status[] = [
  { id: faker.string.uuid(), name: "Lista de Espera"},
];

const users: User[] = Array.from({ length: 1 }).map(() => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  image: faker.image.avatar(),
}));

const now = new Date();

const exampleFeatures: Feature[] = Array.from({ length: 0 }).map(() => ({
  id: faker.string.uuid(),
  name: capitalize(faker.company.buzzPhrase()),
  startAt: faker.date.past({ years: 0.5, refDate: now }),
  endAt: faker.date.future({ years: 0.5, refDate: now }),
  status: faker.helpers.arrayElement(statuses),
  owner: faker.helpers.arrayElement(users),
}));

// 🔹 Função para criar um novo "cliente agendado"
function createNewAppointment(): Feature {
  const statusPlanned = statuses.find((s) => s.name === "Lista de Espera") ?? statuses[0];

  const client = faker.helpers.arrayElement(users);

  return {
    id: faker.string.uuid(),
    name: `Agendamento de ${client.name}`,
    startAt: now,
    endAt: faker.date.future({ years: 0.1, refDate: now }),
    status: statusPlanned,
    owner: client,
  };
}

const Example = () => {
  const [features, setFeatures] = useState<Feature[]>(exampleFeatures);

  // 🔹 DnD continua funcionando normalmente (alterando status da feature)
  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const status = statuses.find((status) => status.name === over.id);
    if (!status) return;

    setFeatures((prev) =>
      prev.map((feature) =>
        feature.id === active.id ? { ...feature, status } : feature
      )
    );
  }, []);

  // 🔹 Botão: apenas adiciona um novo cliente à lista (não altera os já existentes)
  const handleScheduleClick = () => {
    setFeatures((prev) => [...prev, createNewAppointment()]);
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6 space-y-6">
      {/* Cabeçalho com o botão */}
      <header className="flex items-center justify-between">

        <button
          type="button"
          onClick={handleScheduleClick}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-slate-800 transition"
        >
          Agendar seu horário
        </button>
      </header>

      <ListProvider onDragEnd={handleDragEnd}>
        <div className="grid md:grid-cols-3">
          {statuses.map((status) => (
            <ListGroup id={status.name} key={status.name}>
              <ListHeader name={status.name} />
              <ListItems>
                {features
                  .filter((feature) => feature.status.name === status.name)
                  .map((feature, index) => (
                    <ListItem
                      id={feature.id}
                      index={index}
                      key={feature.id}
                      name={feature.name}
                      parent={feature.status.name}
                      className="pointer-events-none select-none"
                    />
                  ))}
              </ListItems>
            </ListGroup>
          ))}
        </div>
      </ListProvider>
    </main>
  );
};

export default Example;
