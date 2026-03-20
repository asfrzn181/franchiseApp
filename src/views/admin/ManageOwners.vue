<script setup>
import { registerOwnerDirectly } from '../../services/adminService'; // Buat service baru mirip registerStaffDirectly

const handleAddOwner = async () => {
  // Logic sama dengan registerStaffDirectly tapi set role: 'owner'
  await registerOwnerDirectly(form.email, form.password, form.name);
  alert("Owner Baru Berhasil Dibuat!");
};
</script>