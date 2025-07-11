import './styles.css';
import DynamicTable from '../../components/List/index.tsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type ServicesGroup = {
	numberProtocol: number;
	date: string;
	adress: string;
	neighborhood: string;
	serviceType: string;
	status: string;
};

const initialClasses: ServicesGroup[] = [
	{ numberProtocol: 65828, date: "21/06/2025", serviceType: 'Limpeza', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 'Pendente' },
	{ numberProtocol: 65859, date: "21/06/2025", serviceType: 'Iluminação', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 'Finalizado' },
	{ numberProtocol: 65867, date: "21/06/2025", serviceType: 'Zeladoria', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 'Pendente' },
	{ numberProtocol: 65888, date: "21/06/2025", serviceType: 'Poda de Arvore', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 1 },
];

type ActionsMenuProps = {
	onEdit: () => void;
	onDelete: () => void;
};

function ActionsMenu({ onEdit, onDelete }: ActionsMenuProps) {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => setOpen(prev => !prev);
	const handleAction = (action: () => void) => {
		action();
		setOpen(false);
	};

	return (
		<div className="dropdown-wrapper">
			<button className="action-button" onClick={toggleMenu}>⋮</button>
			{open && (
				<div className="dropdown-menu-list">
					<div onClick={() => handleAction(onEdit)}>Editar</div>
					<div onClick={() => handleAction(onDelete)} style={{ color: 'red' }}>Excluir</div>
				</div>
			)}
		</div>
	);
}

export default function ClassListPage() {
	const [classes, setClasses] = useState<ProtocolsGroup[]>(initialClasses);
	const [modalOpen, setModalOpen] = useState(false);
	const [editingIndex, setEditingIndex] = useState<number | null>(null);

	const [formData, setFormData] = useState<ProtocolsGroup>({
		number: '',
		date: new Date().getFullYear(),
		course: '',
		galleryCount: 0,
		shift: '',
		studentsCount: 0,
	});

	const handleOpenModal = (index?: number) => {
		if (index !== undefined) {
			setFormData(classes[index]);
			setEditingIndex(index);
		} else {
			setFormData({
				name: '',
				year: new Date().getFullYear(),
				shift: '',
				course: '',
				galleryCount: 0,
				studentsCount: 0,
			});
			setEditingIndex(null);
		}
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setEditingIndex(null);
	};

	const handleSave = () => {
		const updatedClasses = [...classes];
		if (editingIndex !== null) {
			updatedClasses[editingIndex] = formData;
		} else {
			updatedClasses.push(formData);
		}
		setClasses(updatedClasses);
		handleCloseModal();
	};

	const handleDelete = (index: number) => {
		const updated = classes.filter((_, i) => i !== index);
		setClasses(updated);
	};

	// Colunas com Ações mapeadas fora
	const columns = [
		{
			header: 'Protocolo',
			accessor: (item: ProtocolsGroup) => (
				<Link to={`/protocols/12`} style={{ textDecoration: 'none', color: '#1976d2' }}>
					{item.number}
				</Link>
			),
			sortable: true,
		},
		{ header: 'Data', accessor: (item: ProtocolsGroup) => item.date, sortable: true },
		{ header: 'Serviço', accessor: (item: ProtocolsGroup) => item.serviceType, sortable: true },
		{ header: 'Endereço', accessor: (item: ProtocolsGroup) => item.adress, sortable: true },
		{ header: 'Bairro', accessor: (item: ProtocolsGroup) => item.neighborhood, sortable: true },
		{ header: 'Status', accessor: (item: ProtocolsGroup) => item.status, sortable: true },

		{
			header: 'Ações',
			accessor: (item: ProtocolsGroup) => {
				const index = classes.findIndex(i => i.name === item.name);
				return (
					<ActionsMenu
						onEdit={() => handleOpenModal(index)}
						onDelete={() => handleDelete(index)}
					/>
				);
			},
		},
	];

	return (
		<div>
			<div className="header-page row">
				<div className='col-3'>
					<h2 className='title-page'>Turmas</h2>
					<p className='url-page'>Dashboard / Turmas</p>
				</div>
				<div className='col-9 d-flex justify-content-end'>
					<button className="btn btn-primary btn-md" onClick={() => handleOpenModal()}>
						+ Adicionar
					</button>
				</div>
			</div>

			<div className="col-12">
				<div className='card'>
					<DynamicTable data={classes} columns={columns} />
				</div>
			</div>
			{modalOpen && (
				<div className="modal-backdrop">
					<div className="modal-content">
						<h3>{editingIndex !== null ? 'Editar Turma' : 'Nova Turma'}</h3>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
							<input
								type="text"
								placeholder="Nome da Turma"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
							/>
							<input
								type="number"
								placeholder="Ano"
								value={formData.year}
								onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
							/>
							<input
								type="text"
								placeholder="Turno"
								value={formData.shift}
								onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
							/>
							<input
								type="text"
								placeholder="Curso"
								value={formData.course}
								onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
							/>
							<input
								type="number"
								placeholder="Qtd. Alunos"
								value={formData.studentsCount}
								onChange={(e) => setFormData({ ...formData, studentsCount: Number(e.target.value) })}
							/>

							<div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
								<button onClick={handleSave}>Salvar</button>
								<button onClick={handleCloseModal}>Cancelar</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
